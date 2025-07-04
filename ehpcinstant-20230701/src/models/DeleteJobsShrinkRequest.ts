// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteJobsShrinkRequest extends $dara.Model {
  executorIdsShrink?: string;
  jobScheduler?: string;
  jobSpecShrink?: string;
  static names(): { [key: string]: string } {
    return {
      executorIdsShrink: 'ExecutorIds',
      jobScheduler: 'JobScheduler',
      jobSpecShrink: 'JobSpec',
    };
  }

  static types(): { [key: string]: any } {
    return {
      executorIdsShrink: 'string',
      jobScheduler: 'string',
      jobSpecShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

