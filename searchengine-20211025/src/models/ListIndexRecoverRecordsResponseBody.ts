// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListIndexRecoverRecordsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The description.
   * 
   * @example
   * test
   */
  desc?: string;
  /**
   * @remarks
   * The time when the index version was published.
   * 
   * @example
   * 2024-06-07 16:43:00
   */
  finishedTime?: string;
  /**
   * @remarks
   * The ID of the full index version.
   * 
   * @example
   * 1708674867
   */
  generationId?: string;
  static names(): { [key: string]: string } {
    return {
      desc: 'desc',
      finishedTime: 'finishedTime',
      generationId: 'generationId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      desc: 'string',
      finishedTime: 'string',
      generationId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

