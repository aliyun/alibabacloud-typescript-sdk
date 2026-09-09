// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdatePostPaidBindRelRequestBindAction extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to bind all servers. Default value: **false**. Valid values:
   * 
   * - **true**: Bind all servers.
   * - **false**: Do not bind all servers.
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
   * The list of server UUIDs.
   */
  uuidList?: string[];
  /**
   * @remarks
   * The protection edition of Security Center to bind. Valid values:  
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
   * Specifies whether to automatically bind new assets. Valid values:
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
   * The binding action parameter.
   */
  bindAction?: UpdatePostPaidBindRelRequestBindAction[];
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. Different requests should use different tokens. The token supports only ASCII characters and cannot exceed 64 characters in length.
   */
  clientToken?: string;
  /**
   * @remarks
   * The abbreviated name of the cloud service. Valid values:
   * - **sas**: Security Center
   */
  productCode?: string;
  /**
   * @remarks
   * Specifies whether to forcibly upgrade the edition.
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

