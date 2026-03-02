// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class Relation extends $dara.Model {
  /**
   * @example
   * TableB
   */
  destination?: string;
  /**
   * @example
   * 664cc64d-5dea-4ad3-9ee4-8432a874****
   */
  jobId?: string;
  /**
   * @example
   * TableA
   */
  source?: string;
  static names(): { [key: string]: string } {
    return {
      destination: 'destination',
      jobId: 'jobId',
      source: 'source',
    };
  }

  static types(): { [key: string]: any } {
    return {
      destination: 'string',
      jobId: 'string',
      source: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

