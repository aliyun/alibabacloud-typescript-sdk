// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDIJobRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the synchronization task.
   * 
   * This parameter is required.
   * 
   * @example
   * 11588
   */
  DIJobId?: number;
  /**
   * @remarks
   * Specifies whether to return detailed configuration information, including TransformationRules, TableMappings, and JobSettings. Valid values: true and false. Default value: true.
   * 
   * @example
   * true
   */
  withDetails?: boolean;
  static names(): { [key: string]: string } {
    return {
      DIJobId: 'DIJobId',
      withDetails: 'WithDetails',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DIJobId: 'number',
      withDetails: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

