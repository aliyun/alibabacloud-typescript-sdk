// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeFieldResponseBody extends $dara.Model {
  /**
   * @remarks
   * The configuration content.
   * 
   * @example
   * ["ip","name","hostinfo","md5"]
   */
  fields?: string;
  /**
   * @remarks
   * The name of the global configuration.
   * 
   * @example
   * soar_filed_tags
   */
  name?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * BCDE6498-83CC-50A1-8307-3D5A539C42F8
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      fields: 'Fields',
      name: 'Name',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fields: 'string',
      name: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

