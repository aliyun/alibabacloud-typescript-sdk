// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ExecuteAutoDisposeRecordsRequestSelectedEntityList extends $dara.Model {
  /**
   * @remarks
   * The unique ID of the investigation record.
   * 
   * @example
   * 0000089b040b8935fed2e24ca2ec8335
   */
  autoDisposeRecordId?: string;
  /**
   * @remarks
   * The UUID of the entity.
   * 
   * @example
   * 9938fc2708ddc7b7651f3a19e4f09962
   */
  entityUuid?: string;
  static names(): { [key: string]: string } {
    return {
      autoDisposeRecordId: 'AutoDisposeRecordId',
      entityUuid: 'EntityUuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoDisposeRecordId: 'string',
      entityUuid: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExecuteAutoDisposeRecordsRequestUnSelectedEntityList extends $dara.Model {
  /**
   * @remarks
   * The unique ID of the investigation record.
   * 
   * @example
   * 0000089b040b8935fed2e24ca2ec8335
   */
  autoDisposeRecordId?: string;
  /**
   * @remarks
   * The UUID of the entity.
   * 
   * @example
   * ae6ac3e1c9ada174eb8dadd029a2e9d1
   */
  entityUuid?: string;
  static names(): { [key: string]: string } {
    return {
      autoDisposeRecordId: 'AutoDisposeRecordId',
      entityUuid: 'EntityUuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoDisposeRecordId: 'string',
      entityUuid: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExecuteAutoDisposeRecordsRequest extends $dara.Model {
  /**
   * @remarks
   * The language of the response. Valid values:
   * - **zh** (default): Chinese.
   * - **en**: English.
   * 
   * This parameter is required.
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The list of entities selected for manual handling.
   */
  selectedEntityList?: ExecuteAutoDisposeRecordsRequestSelectedEntityList[];
  /**
   * @remarks
   * The list of entities not selected for manual handling.
   */
  unSelectedEntityList?: ExecuteAutoDisposeRecordsRequestUnSelectedEntityList[];
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      selectedEntityList: 'SelectedEntityList',
      unSelectedEntityList: 'UnSelectedEntityList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      selectedEntityList: { 'type': 'array', 'itemType': ExecuteAutoDisposeRecordsRequestSelectedEntityList },
      unSelectedEntityList: { 'type': 'array', 'itemType': ExecuteAutoDisposeRecordsRequestUnSelectedEntityList },
    };
  }

  validate() {
    if(Array.isArray(this.selectedEntityList)) {
      $dara.Model.validateArray(this.selectedEntityList);
    }
    if(Array.isArray(this.unSelectedEntityList)) {
      $dara.Model.validateArray(this.unSelectedEntityList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

