// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeTaskInfoResponseBodyTarget extends $dara.Model {
  /**
   * @remarks
   * The ID of the object.
   * 
   * @example
   * c78592bfe92244365b3c3ad47f1de****
   */
  id?: string;
  /**
   * @remarks
   * The type of the object.
   * 
   * @example
   * cluster
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'id',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

