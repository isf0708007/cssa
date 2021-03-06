package terminal_test

import (
	"github.com/cloudfoundry/cli/cf/ssh/terminal"

	. "github.com/onsi/ginkgo"
	. "github.com/onsi/gomega"
)

var _ = Describe("Helper", func() {
	var helper terminal.TerminalHelper

	BeforeEach(func() {
		helper = terminal.DefaultHelper()
	})

	Describe("DefaultTerminalHelper", func() {
		It("returns a terminal helper", func() {
			Expect(helper).NotTo(BeNil())
		})
	})
})
