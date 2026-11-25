// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAIStaffConversationRequest extends $dara.Model {
  /**
   * @remarks
   * The text of the user question. The first 100 characters are truncated and used as the session title.
   * 
   * @example
   * Bathroom hardware products, featuring a brushed stainless steel surface with a modern silver-gray color tone, presenting a minimalist and textured style. The products include showerheads, faucets, and towel racks, all of which are rust-proof and corrosion-resistant, making them suitable for humid environments. The connections between components are precisely designed with hidden screw structures to enhance overall aesthetics. The faucets and showerheads support multiple water flow modes, and the handles operate smoothly, conforming to ergonomic design. All hardware components have passed the national water-saving certification, support cold and hot water connections, and are wall-mounted
   */
  text?: string;
  static names(): { [key: string]: string } {
    return {
      text: 'Text',
    };
  }

  static types(): { [key: string]: any } {
    return {
      text: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

