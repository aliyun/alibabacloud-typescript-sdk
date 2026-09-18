// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateCodeBundleRequest extends $dara.Model {
  /**
   * @remarks
   * An optional CI/CD metadata JSON string.
   * 
   * @example
   * {"region":"cn-beijing"}
   */
  ciMetadata?: string;
  /**
   * @remarks
   * The file name.
   * 
   * This parameter is required.
   * 
   * @example
   * test-cases.zip
   */
  filename?: string;
  static names(): { [key: string]: string } {
    return {
      ciMetadata: 'ciMetadata',
      filename: 'filename',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ciMetadata: 'string',
      filename: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

