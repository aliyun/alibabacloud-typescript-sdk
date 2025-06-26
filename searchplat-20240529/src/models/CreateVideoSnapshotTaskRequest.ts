// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateVideoSnapshotTaskRequestInput } from "./CreateVideoSnapshotTaskRequestInput";
import { CreateVideoSnapshotTaskRequestOutput } from "./CreateVideoSnapshotTaskRequestOutput";


export class CreateVideoSnapshotTaskRequest extends $dara.Model {
  input?: CreateVideoSnapshotTaskRequestInput;
  output?: CreateVideoSnapshotTaskRequestOutput;
  parameters?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      input: 'input',
      output: 'output',
      parameters: 'parameters',
    };
  }

  static types(): { [key: string]: any } {
    return {
      input: CreateVideoSnapshotTaskRequestInput,
      output: CreateVideoSnapshotTaskRequestOutput,
      parameters: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  validate() {
    if(this.input && typeof (this.input as any).validate === 'function') {
      (this.input as any).validate();
    }
    if(this.output && typeof (this.output as any).validate === 'function') {
      (this.output as any).validate();
    }
    if(this.parameters) {
      $dara.Model.validateMap(this.parameters);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

