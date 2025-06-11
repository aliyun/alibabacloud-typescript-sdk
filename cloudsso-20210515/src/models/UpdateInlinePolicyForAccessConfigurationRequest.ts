// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateInlinePolicyForAccessConfigurationRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the access configuration.
   * 
   * @example
   * ac-00jhtfl8thteu6uj****
   */
  accessConfigurationId?: string;
  /**
   * @remarks
   * The ID of the directory.
   * 
   * @example
   * d-00fc2p61****
   */
  directoryId?: string;
  /**
   * @remarks
   * The name of the inline policy.
   * 
   * @example
   * InlinePolicy
   */
  inlinePolicyName?: string;
  /**
   * @remarks
   * The new configurations of the inline policy.
   * 
   * The value can be up to 4,096 characters in length.
   * 
   * For more information about the syntax and structure of RAM policies, see [Policy syntax and structure](https://help.aliyun.com/document_detail/93739.html).
   * 
   * @example
   * {"Statement": [{"Action": "*","Effect": "Allow","Resource": "*"}],"Version": "1"}
   */
  newInlinePolicyDocument?: string;
  static names(): { [key: string]: string } {
    return {
      accessConfigurationId: 'AccessConfigurationId',
      directoryId: 'DirectoryId',
      inlinePolicyName: 'InlinePolicyName',
      newInlinePolicyDocument: 'NewInlinePolicyDocument',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessConfigurationId: 'string',
      directoryId: 'string',
      inlinePolicyName: 'string',
      newInlinePolicyDocument: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

