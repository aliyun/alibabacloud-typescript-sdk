// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateTagValueRequest extends $dara.Model {
  /**
   * @remarks
   * The identifier of the client.
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @remarks
   * The name of the tag group.
   * 
   * This parameter is required.
   * 
   * @example
   * Tag group 1
   */
  key?: string;
  /**
   * @remarks
   * The name of the tag.
   * 
   * This parameter is required.
   * 
   * @example
   * Tag 1
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      key: 'string',
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

