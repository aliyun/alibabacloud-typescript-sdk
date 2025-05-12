// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { SubmitJobsResponseBodyJobResultListJobResultJobOutputDigiWaterMarkInputFile } from "./SubmitJobsResponseBodyJobResultListJobResultJobOutputDigiWaterMarkInputFile";


export class SubmitJobsResponseBodyJobResultListJobResultJobOutputDigiWaterMark extends $dara.Model {
  /**
   * @remarks
   * The transparency of the text or image.
   * 
   * *   Value values: **(0,1]**.
   * *   Default value: **1.0**.
   * 
   * @example
   * 1.0
   */
  alpha?: string;
  /**
   * @remarks
   * The details of the input file.
   */
  inputFile?: SubmitJobsResponseBodyJobResultListJobResultJobOutputDigiWaterMarkInputFile;
  /**
   * @remarks
   * The type of the watermark. If this parameter is specified in the request, the corresponding parameter in the watermark template is overwritten. Valid values:
   * 
   * *   **Image** (default)
   * *   **Text**
   * 
   * @example
   * Image
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      alpha: 'Alpha',
      inputFile: 'InputFile',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alpha: 'string',
      inputFile: SubmitJobsResponseBodyJobResultListJobResultJobOutputDigiWaterMarkInputFile,
      type: 'string',
    };
  }

  validate() {
    if(this.inputFile && typeof (this.inputFile as any).validate === 'function') {
      (this.inputFile as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

