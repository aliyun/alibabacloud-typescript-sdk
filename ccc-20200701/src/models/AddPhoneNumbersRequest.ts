// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddPhoneNumbersRequest extends $dara.Model {
  /**
   * @example
   * dDMD_0mif4hv
   */
  contactFlowId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ccc-test
   */
  instanceId?: string;
  /**
   * @example
   * 2cb77c29-5f60-4b90-b21e-9d2ba9833f14
   */
  numberGroupId?: string;
  /**
   * @example
   * ["0101234****", "0105678****"]
   */
  numberList?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * Bidirection
   */
  usage?: string;
  static names(): { [key: string]: string } {
    return {
      contactFlowId: 'ContactFlowId',
      instanceId: 'InstanceId',
      numberGroupId: 'NumberGroupId',
      numberList: 'NumberList',
      usage: 'Usage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contactFlowId: 'string',
      instanceId: 'string',
      numberGroupId: 'string',
      numberList: 'string',
      usage: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

