// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCallSummariesShrinkRequest extends $dara.Model {
  contactIdListShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ccc-test
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      contactIdListShrink: 'ContactIdList',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contactIdListShrink: 'string',
      instanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

