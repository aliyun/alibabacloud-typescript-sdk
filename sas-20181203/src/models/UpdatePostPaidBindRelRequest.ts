// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdatePostPaidBindRelRequestBindAction extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to bind all servers. Default value: **false**. Valid values:
   * 
   * - **true**: Yes.
   * - **false**: No.
   * 
   * @example
   * true
   */
  bindAll?: boolean;
  /**
   * @remarks
   * The free quota type.
   */
  freeType?: string;
  /**
   * @remarks
   * The list of UUIDs of the specified servers.
   */
  uuidList?: string[];
  /**
   * @remarks
   * The Security Center protection edition to bind. Valid values:  
   * - **1**: Free Edition 
   * - **3**: Enterprise Edition
   * - **5**: Advanced Edition
   * - **6**: Anti-virus Edition    
   * - **7**: Ultimate Edition
   * 
   * @example
   * 3
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      bindAll: 'BindAll',
      freeType: 'FreeType',
      uuidList: 'UuidList',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bindAll: 'boolean',
      freeType: 'string',
      uuidList: { 'type': 'array', 'itemType': 'string' },
      version: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.uuidList)) {
      $dara.Model.validateArray(this.uuidList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdatePostPaidBindRelRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to automatically bind newly added assets. Valid values:
   * 
   * - **0**: Disabled.
   * - **1**: Enabled.
   * 
   * @example
   * 1
   */
  autoBind?: number;
  /**
   * @remarks
   * The edition to automatically bind when new assets are added. Valid values:
   * - **1**: Free Edition 
   * - **3**: Enterprise Edition
   * - **5**: Advanced Edition
   * - **6**: Anti-virus Edition    
   * - **7**: Ultimate Edition
   * 
   * @example
   * 3
   */
  autoBindVersion?: number;
  /**
   * @remarks
   * The action parameters for the binding operation.
   */
  bindAction?: UpdatePostPaidBindRelRequestBindAction[];
  /**
   * @remarks
   * The client token used to ensure the idempotence of the request. Use a different token for different requests. Only ASCII characters are supported. The token cannot exceed 64 characters in length.
   * 
   * @example
   * 02fb3da4-130e-11e9-8e44-0016e04115b
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to perform only a dry run. Valid values: true: performs only a dry run without executing the actual operation. false: sends the request normally. Default value: false.
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The abbreviated name of the cloud service. Valid values:
   * - **sas**: Security Center.
   */
  productCode?: string;
  /**
   * @remarks
   * Specifies whether to force an edition upgrade.
   * 
   * @example
   * false
   */
  updateIfNecessary?: boolean;
  static names(): { [key: string]: string } {
    return {
      autoBind: 'AutoBind',
      autoBindVersion: 'AutoBindVersion',
      bindAction: 'BindAction',
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      productCode: 'ProductCode',
      updateIfNecessary: 'UpdateIfNecessary',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoBind: 'number',
      autoBindVersion: 'number',
      bindAction: { 'type': 'array', 'itemType': UpdatePostPaidBindRelRequestBindAction },
      clientToken: 'string',
      dryRun: 'boolean',
      productCode: 'string',
      updateIfNecessary: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.bindAction)) {
      $dara.Model.validateArray(this.bindAction);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

