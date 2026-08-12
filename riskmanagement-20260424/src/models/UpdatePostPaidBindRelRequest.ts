// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdatePostPaidBindRelRequestSdkRequestBindAction extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to bind all assets. Default value: **false**. Valid values:
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
   * The list of specified server UUIDs.
   * > Number of items <= 1000. Number of items >= 0.
   */
  uuidList?: string[];
  /**
   * @remarks
   * The Security Center protection edition to bind. Valid values:
   * 
   * - **1**: Free Edition.
   * - **3**: Enterprise Edition.
   * - **5**: Advanced Edition.
   * - **6**: Anti-virus Edition.
   * - **7**: Ultimate Edition.
   * 
   * @example
   * 1
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      bindAll: 'BindAll',
      uuidList: 'UuidList',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bindAll: 'boolean',
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

export class UpdatePostPaidBindRelRequestSdkRequest extends $dara.Model {
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
   * - **1**: Free Edition. 
   * - **3**: Enterprise Edition.
   * - **5**: Advanced Edition.
   * - **6**: Anti-virus Edition.    
   * - **7**: Ultimate Edition.
   * 
   * @example
   * 3
   */
  autoBindVersion?: number;
  /**
   * @remarks
   * The list of binding action parameters.
   */
  bindAction?: UpdatePostPaidBindRelRequestSdkRequestBindAction[];
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
      updateIfNecessary: 'UpdateIfNecessary',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoBind: 'number',
      autoBindVersion: 'number',
      bindAction: { 'type': 'array', 'itemType': UpdatePostPaidBindRelRequestSdkRequestBindAction },
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

export class UpdatePostPaidBindRelRequest extends $dara.Model {
  /**
   * @remarks
   * The region ID of the instance.
   * 
   * @example
   * cn-huhehaote
   */
  regionId?: string;
  /**
   * @remarks
   * The Security Center SDK request parameters.
   */
  sdkRequest?: UpdatePostPaidBindRelRequestSdkRequest;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      sdkRequest: 'SdkRequest',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      sdkRequest: UpdatePostPaidBindRelRequestSdkRequest,
    };
  }

  validate() {
    if(this.sdkRequest && typeof (this.sdkRequest as any).validate === 'function') {
      (this.sdkRequest as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

