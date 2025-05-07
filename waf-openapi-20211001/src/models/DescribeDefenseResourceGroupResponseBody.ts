// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDefenseResourceGroupResponseBodyGroup } from "./DescribeDefenseResourceGroupResponseBodyGroup";


export class DescribeDefenseResourceGroupResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the protected object group.
   */
  group?: DescribeDefenseResourceGroupResponseBodyGroup;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * E67D21C6-5376-5F94-B745-70E08D03E3CB
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      group: 'Group',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      group: DescribeDefenseResourceGroupResponseBodyGroup,
      requestId: 'string',
    };
  }

  validate() {
    if(this.group && typeof (this.group as any).validate === 'function') {
      (this.group as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

