// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListEnabledExtensionsForProjectResponseBodyExtensions extends $dara.Model {
  /**
   * @remarks
   * The creator of the extension.
   * 
   * @example
   * 3444434343555
   */
  createUser?: string;
  /**
   * @remarks
   * The unique code of the extension.
   * 
   * @example
   * a94a8e23bc0b4dfab9a5e4d2f374d645
   */
  extensionCode?: string;
  /**
   * @remarks
   * The description of the extension.
   * 
   * @example
   * ODPS SQL compatible Spark engine detection
   */
  extensionDesc?: string;
  /**
   * @remarks
   * The name of the extension.
   * 
   * @example
   * max_pt function is not allowed.
   */
  extensionName?: string;
  /**
   * @remarks
   * The modifier of the extension.
   * 
   * @example
   * 34452335611988
   */
  modifyUser?: string;
  /**
   * @remarks
   * The owner ID.
   * 
   * @example
   * 21323672*******55500
   */
  owner?: string;
  /**
   * @remarks
   * The parameter settings of the extension. For more information, see [Configure extension parameters](https://help.aliyun.com/document_detail/405354.html).
   * 
   * @example
   * extension.fileType.23.deploy-file.enabled=true
   */
  parameterSetting?: string;
  /**
   * @remarks
   * The tenant ID.
   * 
   * @example
   * 529889518659842
   */
  tenantId?: number;
  static names(): { [key: string]: string } {
    return {
      createUser: 'CreateUser',
      extensionCode: 'ExtensionCode',
      extensionDesc: 'ExtensionDesc',
      extensionName: 'ExtensionName',
      modifyUser: 'ModifyUser',
      owner: 'Owner',
      parameterSetting: 'ParameterSetting',
      tenantId: 'TenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createUser: 'string',
      extensionCode: 'string',
      extensionDesc: 'string',
      extensionName: 'string',
      modifyUser: 'string',
      owner: 'string',
      parameterSetting: 'string',
      tenantId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEnabledExtensionsForProjectResponseBody extends $dara.Model {
  /**
   * @remarks
   * The extensions.
   */
  extensions?: ListEnabledExtensionsForProjectResponseBodyExtensions[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 4F2CA7ED-27E5-59EA-A8C4-F1F7A1FF0B22
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      extensions: 'Extensions',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      extensions: { 'type': 'array', 'itemType': ListEnabledExtensionsForProjectResponseBodyExtensions },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.extensions)) {
      $dara.Model.validateArray(this.extensions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

