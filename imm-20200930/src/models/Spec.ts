// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CustomParams } from "./CustomParams";


export class Spec extends $dara.Model {
  /**
   * @remarks
   * The custom parameters for model training.
   */
  backbone?: CustomParams;
  /**
   * @remarks
   * The number of output classes of the last layer.
   * 
   * @example
   * 10
   */
  classNum?: number;
  /**
   * @remarks
   * The custom parameters for model training.
   */
  head?: CustomParams;
  /**
   * @remarks
   * 3
   * 
   * @example
   * 3
   */
  inputChannel?: number;
  /**
   * @remarks
   * The custom parameters for model training.
   */
  loss?: CustomParams;
  /**
   * @remarks
   * The name of the model. The available model names vary with the model category.
   * 
   * This parameter is required.
   * 
   * @example
   * ClsResNet
   */
  name?: string;
  /**
   * @remarks
   * The custom parameters for model training.
   */
  neck?: CustomParams;
  /**
   * @remarks
   * The number of face landmarks. This parameter is required for face detection. In most cases, you can set the parameter to 5.
   * 
   * @example
   * 5
   */
  numLandmarks?: number;
  /**
   * @remarks
   * The path to the pretrained model.
   * 
   * @example
   * oss://bucket/abc/xxx.json
   */
  pretrainedPath?: string;
  static names(): { [key: string]: string } {
    return {
      backbone: 'Backbone',
      classNum: 'ClassNum',
      head: 'Head',
      inputChannel: 'InputChannel',
      loss: 'Loss',
      name: 'Name',
      neck: 'Neck',
      numLandmarks: 'NumLandmarks',
      pretrainedPath: 'PretrainedPath',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backbone: CustomParams,
      classNum: 'number',
      head: CustomParams,
      inputChannel: 'number',
      loss: CustomParams,
      name: 'string',
      neck: CustomParams,
      numLandmarks: 'number',
      pretrainedPath: 'string',
    };
  }

  validate() {
    if(this.backbone && typeof (this.backbone as any).validate === 'function') {
      (this.backbone as any).validate();
    }
    if(this.head && typeof (this.head as any).validate === 'function') {
      (this.head as any).validate();
    }
    if(this.loss && typeof (this.loss as any).validate === 'function') {
      (this.loss as any).validate();
    }
    if(this.neck && typeof (this.neck as any).validate === 'function') {
      (this.neck as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

