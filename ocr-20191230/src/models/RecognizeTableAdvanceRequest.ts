// This file is auto-generated, don't edit it
import { Readable } from 'stream';
import * as $dara from '@darabonba/typescript';


export class RecognizeTableAdvanceRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * false
   */
  assureDirection?: boolean;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * false
   */
  hasLine?: boolean;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * http://viapi-test.oss-cn-shanghai.aliyuncs.com/viapi-3.0domepic/ocr/RecognizeTable/RecognizeTable4.jpg
   */
  imageURLObject?: Readable;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * json
   */
  outputFormat?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * false
   */
  skipDetection?: boolean;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * true
   */
  useFinanceModel?: boolean;
  static names(): { [key: string]: string } {
    return {
      assureDirection: 'AssureDirection',
      hasLine: 'HasLine',
      imageURLObject: 'ImageURL',
      outputFormat: 'OutputFormat',
      skipDetection: 'SkipDetection',
      useFinanceModel: 'UseFinanceModel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assureDirection: 'boolean',
      hasLine: 'boolean',
      imageURLObject: 'Readable',
      outputFormat: 'string',
      skipDetection: 'boolean',
      useFinanceModel: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

