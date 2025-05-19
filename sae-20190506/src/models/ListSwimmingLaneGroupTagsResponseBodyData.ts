// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSwimmingLaneGroupTagsResponseBodyData extends $dara.Model {
  /**
   * @example
   * {"version":"1.0.0","owner":"team-a"}
   */
  metadata?: string;
  /**
   * @example
   * {"alicloud.service.tag":"g1"}
   */
  tag?: string;
  static names(): { [key: string]: string } {
    return {
      metadata: 'Metadata',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      metadata: 'string',
      tag: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

