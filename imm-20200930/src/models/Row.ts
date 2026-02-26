// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { KeyValuePair } from "./KeyValuePair";


export class Row extends $dara.Model {
  /**
   * @remarks
   * The custom labels.
   */
  customLabels?: KeyValuePair[];
  /**
   * @remarks
   * The OSS URI of the file.
   * 
   * The OSS URI is in the `oss://${bucketname}/${objectname}` format, where `${bucketname}` is the name of the OSS bucket that is in the same region as the current project and `${objectname}` is the path of the file.
   * 
   * @example
   * oss://examplebucket/exampleobject.jpg
   */
  URI?: string;
  static names(): { [key: string]: string } {
    return {
      customLabels: 'CustomLabels',
      URI: 'URI',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customLabels: { 'type': 'array', 'itemType': KeyValuePair },
      URI: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.customLabels)) {
      $dara.Model.validateArray(this.customLabels);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

