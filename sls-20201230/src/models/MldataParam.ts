// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { MLDataParamAnnotationsValue } from "./MldataParamAnnotationsValue";
import { MLDataParamPredictionsValue } from "./MldataParamPredictionsValue";


export class MLDataParam extends $dara.Model {
  /**
   * @example
   * dc74b0f569126bb310e1ba6454c351ac
   */
  annotationdataId?: string;
  annotations?: { [key: string]: MLDataParamAnnotationsValue };
  config?: { [key: string]: string };
  /**
   * @example
   * 1695094335
   */
  createTime?: number;
  /**
   * @example
   * 59db060bd89468245d76416a68a510ac
   */
  dataHash?: string;
  /**
   * @example
   * a9bd488f6dd42d294495fb780858e83d
   */
  datasetId?: string;
  /**
   * @example
   * 1695094335
   */
  lastModifyTime?: number;
  predictions?: { [key: string]: MLDataParamPredictionsValue };
  /**
   * @example
   * xxx/xxx/xxx/
   */
  value?: string;
  /**
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

