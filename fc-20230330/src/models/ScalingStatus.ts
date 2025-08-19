// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ScalingStatus extends $dara.Model {
  currentError?: string;
  resourceCount?: number;
  static names(): { [key: string]: string } {
    return {
      currentError: 'currentError',
      resourceCount: 'resourceCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentError: 'string',
      resourceCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

