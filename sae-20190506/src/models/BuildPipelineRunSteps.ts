// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BuildPipelineRunSteps extends $dara.Model {
  description?: string;
  duration?: number;
  endTime?: number;
  id?: string;
  name?: string;
  result?: string;
  startTime?: number;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      duration: 'Duration',
      endTime: 'EndTime',
      id: 'Id',
      name: 'Name',
      result: 'Result',
      startTime: 'StartTime',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      duration: 'number',
      endTime: 'number',
      id: 'string',
      name: 'string',
      result: 'string',
      startTime: 'number',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

