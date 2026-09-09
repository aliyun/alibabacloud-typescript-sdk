// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ResourceRecord extends $dara.Model {
  /**
   * @remarks
   * The record creation time, a UNIX timestamp in seconds. This field is returned only in responses.
   * 
   * @example
   * 1787800000
   */
  createTime?: number;
  /**
   * @remarks
   * The record ID. If this field is not specified during creation or batch write, the server automatically generates it. If specified, the provided ID is used.
   * 
   * @example
   * record-001
   */
  id?: string;
  /**
   * @remarks
   * The record last modification time, a UNIX timestamp in seconds. This field is returned only in responses.
   * 
   * @example
   * 1787803600
   */
  lastModifyTime?: number;
  /**
   * @remarks
   * The record tag.
   * 
   * @example
   * production
   */
  tag?: string;
  /**
   * @remarks
   * The record content, which is a string encoded from a JSON object.
   * 
   * This parameter is required.
   * 
   * @example
   * {"key":"value"}
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'createTime',
      id: 'id',
      lastModifyTime: 'lastModifyTime',
      tag: 'tag',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'number',
      id: 'string',
      lastModifyTime: 'number',
      tag: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

