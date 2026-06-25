// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateImageBuildResponseBody extends $dara.Model {
  /**
   * @remarks
   * The image build ID.
   * 
   * @example
   * build-****ks92
   */
  imageBuildId?: string;
  /**
   * @remarks
   * The build task ID.
   * 
   * @example
   * dlc-****ks92
   */
  imageBuildJobId?: string;
  static names(): { [key: string]: string } {
    return {
      imageBuildId: 'ImageBuildId',
      imageBuildJobId: 'ImageBuildJobId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageBuildId: 'string',
      imageBuildJobId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

