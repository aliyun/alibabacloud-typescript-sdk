// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteScheduledPreloadJobRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the scheduled prefetch task.
   * 
   * This parameter is required.
   * 
   * @example
   * DeleteScheduledPreloadJob
   */
  id?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

