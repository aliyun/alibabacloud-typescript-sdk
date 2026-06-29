// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ExportAnnotationsRequest extends $dara.Model {
  /**
   * @remarks
   * OSS path.
   * 
   * This parameter is required.
   * 
   * @example
   * oss://***-hz-oss.oss-cn-hangzhou.aliyuncs.com/output/
   */
  ossPath?: string;
  /**
   * @remarks
   * Specifies whether to register the result as a PAI dataset. Valid values:
   * - true: Registers the annotation result as a PAI dataset.
   * - false: Exports the annotation result directly to an OSS folder without registering it as a dataset.
   * 
   * @example
   * true
   */
  registerDataset?: string;
  /**
   * @remarks
   * Target.
   * 
   * @example
   * PAI
   */
  target?: string;
  static names(): { [key: string]: string } {
    return {
      ossPath: 'OssPath',
      registerDataset: 'RegisterDataset',
      target: 'Target',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ossPath: 'string',
      registerDataset: 'string',
      target: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

