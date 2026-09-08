// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddPhoneNumbersRequest extends $dara.Model {
  /**
   * @remarks
   * ID of the IVR contact flow to attach. This parameter is valid only when the number usage includes inbound calls. It is optional and defaults to empty.
   * 
   * @example
   * dDMD_0mif4hv
   */
  contactFlowId?: string;
  /**
   * @remarks
   * Instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * ccc-test
   */
  instanceId?: string;
  /**
   * @remarks
   * Number group ID. You can view number grouping information in the Cloud Contact Center console. This parameter is optional and defaults to empty.
   * 
   * @example
   * 2cb77c29-5f60-4b90-b21e-9d2ba9833f14
   */
  numberGroupId?: string;
  /**
   * @remarks
   * List of phone numbers to add.
   * 
   * @example
   * ["0101234****", "0105678****"]
   */
  numberList?: string;
  /**
   * @remarks
   * Usage of the phone number. Note: If the provided number is a 400 number, the usage must be set to Inbound.
   * 
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

