// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CompareImageFacesRequestSource extends $dara.Model {
  /**
   * @remarks
   * The OSS URL of the image file.
   * 
   * Specify the URL in the `oss://<bucket>/<object>` format. `<bucket>` specifies the name of the OSS bucket that is in the same region as the current project. `<object>` specifies path of the object with the extension included.
   * 
   * @example
   * oss://test-bucket/test-object1
   */
  URI1?: string;
  /**
   * @remarks
   * The OSS URL of the image file.
   * 
   * Specify the URL in the `oss://<bucket>/<object>` format. `<bucket>` specifies the name of the OSS bucket that is in the same region as the current project, and `<object>` specifies the path of the object with the extension included.
   * 
   * @example
   * oss://test-bucket/test-object2
   */
  URI2?: string;
  static names(): { [key: string]: string } {
    return {
      URI1: 'URI1',
      URI2: 'URI2',
    };
  }

  static types(): { [key: string]: any } {
    return {
      URI1: 'string',
      URI2: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

