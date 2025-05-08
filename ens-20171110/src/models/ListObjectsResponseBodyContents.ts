// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListObjectsResponseBodyContents extends $dara.Model {
  /**
   * @remarks
   * The entity tag (ETag). When an object is created, an ETag is created to identify the content of the object.
   * 
   * *   For an object that is created by calling the PutObject operation, the ETag value of the object is the MD5 hash of the object content.
   * *   For an object that is not created by calling the PutObject operation, the ETag value of the object is the UUID of the object content.
   * *   The ETag of an object can be used to check whether the object content is modified. However, we recommend that you use the MD5 hash of an object rather than the ETag value of the object to verify data integrity.
   * 
   * @example
   * 5B3C1A2E053D763E1B002CC607C5****
   */
  ETag?: string;
  /**
   * @remarks
   * The name of the object.
   * 
   * @example
   * ceshi.txt1617853706546
   */
  key?: string;
  /**
   * @remarks
   * The time when the object was last modified.
   * 
   * @example
   * 2021-04-08T03:48:47.488Z
   */
  lastModified?: string;
  /**
   * @remarks
   * The size of the returned object. Unit: bytes.
   * 
   * @example
   * 15
   */
  size?: number;
  static names(): { [key: string]: string } {
    return {
      ETag: 'ETag',
      key: 'Key',
      lastModified: 'LastModified',
      size: 'Size',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ETag: 'string',
      key: 'string',
      lastModified: 'string',
      size: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

