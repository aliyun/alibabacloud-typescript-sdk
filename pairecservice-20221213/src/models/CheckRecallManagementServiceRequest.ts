// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CheckRecallManagementServiceRequest extends $dara.Model {
  /**
   * @remarks
   * The context parameters.
   */
  contextParams?: { [key: string]: any };
  /**
   * @remarks
   * The exposure list.
   */
  exposureList?: string[];
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * learn-pairec-xxx
   */
  instanceId?: string;
  /**
   * @remarks
   * The recall management service version ID.
   * 
   * @example
   * 2
   */
  recallManagementServiceVersionId?: string;
  /**
   * @remarks
   * The recall data details.
   */
  recalls?: { [key: string]: any };
  /**
   * @remarks
   * The retained fields.
   */
  retainFields?: string[];
  /**
   * @remarks
   * The user ID.
   * 
   * @example
   * 1001
   */
  uid?: string;
  static names(): { [key: string]: string } {
    return {
      contextParams: 'ContextParams',
      exposureList: 'ExposureList',
      instanceId: 'InstanceId',
      recallManagementServiceVersionId: 'RecallManagementServiceVersionId',
      recalls: 'Recalls',
      retainFields: 'RetainFields',
      uid: 'Uid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contextParams: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      exposureList: { 'type': 'array', 'itemType': 'string' },
      instanceId: 'string',
      recallManagementServiceVersionId: 'string',
      recalls: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      retainFields: { 'type': 'array', 'itemType': 'string' },
      uid: 'string',
    };
  }

  validate() {
    if(this.contextParams) {
      $dara.Model.validateMap(this.contextParams);
    }
    if(Array.isArray(this.exposureList)) {
      $dara.Model.validateArray(this.exposureList);
    }
    if(this.recalls) {
      $dara.Model.validateMap(this.recalls);
    }
    if(Array.isArray(this.retainFields)) {
      $dara.Model.validateArray(this.retainFields);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

