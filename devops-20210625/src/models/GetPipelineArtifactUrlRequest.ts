// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetPipelineArtifactUrlRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * test.tgz
   */
  fileName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * /test/test/test.tgz
   */
  filePath?: string;
  static names(): { [key: string]: string } {
    return {
      fileName: 'fileName',
      filePath: 'filePath',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileName: 'string',
      filePath: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

