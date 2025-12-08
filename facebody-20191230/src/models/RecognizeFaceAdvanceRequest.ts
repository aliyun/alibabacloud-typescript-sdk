// This file is auto-generated, don't edit it
import { Readable } from 'stream';
import * as $dara from '@darabonba/typescript';


export class RecognizeFaceAdvanceRequest extends $dara.Model {
  /**
   * @example
   * false
   */
  age?: boolean;
  /**
   * @example
   * false
   */
  beauty?: boolean;
  /**
   * @example
   * false
   */
  expression?: boolean;
  /**
   * @example
   * false
   */
  gender?: boolean;
  /**
   * @example
   * false
   */
  glass?: boolean;
  /**
   * @example
   * false
   */
  hat?: boolean;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * http://viapi-test.oss-cn-shanghai.aliyuncs.com/viapi-3.0domepic/facebody/RecognizeFace/RecognizeFace1.png
   */
  imageURLObject?: Readable;
  /**
   * @example
   * false
   */
  mask?: boolean;
  /**
   * @example
   * 1
   */
  maxFaceNumber?: number;
  /**
   * @example
   * false
   */
  quality?: boolean;
  static names(): { [key: string]: string } {
    return {
      age: 'Age',
      beauty: 'Beauty',
      expression: 'Expression',
      gender: 'Gender',
      glass: 'Glass',
      hat: 'Hat',
      imageURLObject: 'ImageURL',
      mask: 'Mask',
      maxFaceNumber: 'MaxFaceNumber',
      quality: 'Quality',
    };
  }

  static types(): { [key: string]: any } {
    return {
      age: 'boolean',
      beauty: 'boolean',
      expression: 'boolean',
      gender: 'boolean',
      glass: 'boolean',
      hat: 'boolean',
      imageURLObject: 'Readable',
      mask: 'boolean',
      maxFaceNumber: 'number',
      quality: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

