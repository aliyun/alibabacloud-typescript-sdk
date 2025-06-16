// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateBgpGroupResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the BGP group.
   * 
   * @example
   * bgpg-bp1k25cyp26cllath****
   */
  bgpGroupId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * C1221A1F-2ACD-4592-8F27-474E02883159
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      bgpGroupId: 'BgpGroupId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bgpGroupId: 'string',
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

