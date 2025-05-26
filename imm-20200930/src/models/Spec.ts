// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CustomParams } from "./CustomParams";


export class Spec extends $dara.Model {
  backbone?: CustomParams;
  /**
   * @example
   * 10
   */
  classNum?: number;
  head?: CustomParams;
  /**
   * @example
   * 3
   */
  inputChannel?: number;
  loss?: CustomParams;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ClsResNet
   */
  name?: string;
  neck?: CustomParams;
  /**
   * @example
   * 5
   */
  numLandmarks?: number;
  /**
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

