// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetYikeAgentJobEstimatedCreditRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * SubmitYikeAvatarNarratorJob
   */
  jobAction?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * {\\"TextType\\":2,\\"TextContent\\":\\"Today, Beijing held a press conference to announce plans to further optimize the city\\"s transportation network, including adding three new subway lines within the next three years....\\",\\"AspectRatio\\":\\"16:9\\", \\"Resolution\\":\\"720P\\", \\"OutputLanguages\\":[\\"CN\\",\\"YUE\\"]"}
   */
  jobParams?: string;
  static names(): { [key: string]: string } {
    return {
      jobAction: 'JobAction',
      jobParams: 'JobParams',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobAction: 'string',
      jobParams: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

