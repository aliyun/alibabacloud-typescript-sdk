// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class Relation extends $dara.Model {
  destination?: string;
  jobId?: string;
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

