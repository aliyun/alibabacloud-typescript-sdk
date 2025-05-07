// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BuildPipelineRunLogLine extends $dara.Model {
  content?: string;
  offset?: number;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      offset: 'Offset',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      offset: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

