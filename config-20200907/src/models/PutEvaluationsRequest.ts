// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PutEvaluationsRequest extends $dara.Model {
  deleteMode?: boolean;
  evaluations?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  resultToken?: string;
  static names(): { [key: string]: string } {
    return {
      deleteMode: 'DeleteMode',
      evaluations: 'Evaluations',
      resultToken: 'ResultToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deleteMode: 'boolean',
      evaluations: 'string',
      resultToken: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

