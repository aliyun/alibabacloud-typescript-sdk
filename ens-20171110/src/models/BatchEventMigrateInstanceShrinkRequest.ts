// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BatchEventMigrateInstanceShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The details of events.
   */
  eventInfosShrink?: string;
  static names(): { [key: string]: string } {
    return {
      eventInfosShrink: 'EventInfos',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventInfosShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

