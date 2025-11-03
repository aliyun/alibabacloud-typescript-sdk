// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdatePostPaidBindRelRequestBindAction extends $dara.Model {
  /**
   * @remarks
   * Whether to bind all. Default is **false**. Values:
   * 
   * - **true**: Yes
   * - **false**: No
   * 
   * @example
   * true
   */
  bindAll?: boolean;
  /**
   * @remarks
   * List of specified server UUIDs.
   */
  uuidList?: string[];
  /**
   * @remarks
   * The Cloud Security Center protection version that needs to be bound. Values:  
   * - **1**: Basic Edition 
   * - **3**: Enterprise Edition
   * - **5**: Advanced Edition
   * - **6**: Antivirus Edition    
   * - **7**: Container Edition
   * 
   * @example
   * 3
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

export class UpdatePostPaidBindRelRequest extends $dara.Model {
  /**
   * @remarks
   * Enable automatic binding for new assets. Values:
   * 
   * - **0**: Off
   * - **1**: On
   * 
   * @example
   * 1
   */
  autoBind?: number;
  /**
   * @remarks
   * Version to automatically bind when adding new assets. Values:
   * - **1**: Basic Edition 
   * - **3**: Enterprise Edition
   * - **5**: Advanced Edition
   * - **6**: Antivirus Edition    
   * - **7**: Container Edition
   * 
   * @example
   * 3
   */
  autoBindVersion?: number;
  /**
   * @remarks
   * Parameters for the binding action.
   */
  bindAction?: UpdatePostPaidBindRelRequestBindAction[];
  /**
   * @remarks
   * Whether to force upgrade the version.
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
      bindAction: { 'type': 'array', 'itemType': UpdatePostPaidBindRelRequestBindAction },
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

