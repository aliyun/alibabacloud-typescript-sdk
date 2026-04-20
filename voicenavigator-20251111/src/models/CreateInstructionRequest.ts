// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateInstructionRequest extends $dara.Model {
  /**
   * @example
   * Transfer00
   */
  code?: string;
  /**
   * @example
   * {
   * 	"providerId": "xxxxxxxxx",
   * 	"transferMethod": "BYE",
   * 	"transferType": "External",
   * 	"transferTarget": "152******",
   * 	"transferor": "01*****",
   * 	"timeoutSeconds": "10"
   * }
   */
  config?: string;
  /**
   * @example
   * 36e9a4cd-a821-4f78-86fa-a9a4aefeea2e
   */
  instanceId?: string;
  name?: string;
  /**
   * @example
   * TRANSFER
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      config: 'Config',
      instanceId: 'InstanceId',
      name: 'Name',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      config: 'string',
      instanceId: 'string',
      name: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

