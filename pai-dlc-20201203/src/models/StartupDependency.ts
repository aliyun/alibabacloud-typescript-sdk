// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StartupDependency extends $dara.Model {
  minReplicas?: string;
  onPhase?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      minReplicas: 'MinReplicas',
      onPhase: 'OnPhase',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      minReplicas: 'string',
      onPhase: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

