// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { MLDataParamAnnotationsValue } from "./MldataParamAnnotationsValue";
import { MLDataParamPredictionsValue } from "./MldataParamPredictionsValue";


export class MLDataParam extends $dara.Model {
  /**
   * @remarks
   * The unique identifier of the data.
   * 
   * @example
   * dc74b0f569126bb310e1ba6454c351ac
   */
  annotationdataId?: string;
  /**
   * @remarks
   * The annotations of the data.
   */
  annotations?: { [key: string]: MLDataParamAnnotationsValue };
  /**
   * @remarks
   * The configurations of the data.
   */
  config?: { [key: string]: string };
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 1695094335
   */
  createTime?: number;
  /**
   * @remarks
   * The hash value of the data.
   * 
   * @example
   * 59db060bd89468245d76416a68a510ac
   */
  dataHash?: string;
  /**
   * @remarks
   * The ID of the associated dataset.
   * 
   * @example
   * cb8cc4eb51a85e823471cdb368fae9be
   */
  datasetId?: string;
  /**
   * @remarks
   * The last modification time.
   * 
   * @example
   * 1695094335
   */
  lastModifyTime?: number;
  /**
   * @remarks
   * The model preview results.
   */
  predictions?: { [key: string]: MLDataParamPredictionsValue };
  /**
   * @remarks
   * The data source.
   * 
   * @example
   * xxx/xxx/xxx/
   */
  value?: string;
  /**
   * @remarks
   * The type of the data source.
   * 
   * @example
   * oss
   */
  valueType?: string;
  static names(): { [key: string]: string } {
    return {
      annotationdataId: 'annotationdataId',
      annotations: 'annotations',
      config: 'config',
      createTime: 'createTime',
      dataHash: 'dataHash',
      datasetId: 'datasetId',
      lastModifyTime: 'lastModifyTime',
      predictions: 'predictions',
      value: 'value',
      valueType: 'valueType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      annotationdataId: 'string',
      annotations: { 'type': 'map', 'keyType': 'string', 'valueType': MLDataParamAnnotationsValue },
      config: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      createTime: 'number',
      dataHash: 'string',
      datasetId: 'string',
      lastModifyTime: 'number',
      predictions: { 'type': 'map', 'keyType': 'string', 'valueType': MLDataParamPredictionsValue },
      value: 'string',
      valueType: 'string',
    };
  }

  validate() {
    if(this.annotations) {
      $dara.Model.validateMap(this.annotations);
    }
    if(this.config) {
      $dara.Model.validateMap(this.config);
    }
    if(this.predictions) {
      $dara.Model.validateMap(this.predictions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

