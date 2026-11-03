// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDIJobRequest extends $dara.Model {
  /**
   * @remarks
   * **[Deprecated]** This field is deprecated. Use the Id field instead.
   * 
   * @example
   * 11588
   * 
   * @deprecated
   */
  DIJobId?: number;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * 11588
   */
  id?: number;
  /**
   * @remarks
   * The DataWorks workspace ID. You can call the ListProjects operation to obtain the workspace ID.
   * 
   * @example
   * 10000
   */
  projectId?: number;
  /**
   * @remarks
   * Specifies whether to return detailed configuration information, which includes TransformationRules, TableMappings, and JobSettings. Default value: true.
   * 
   * @example
   * true
   */
  withDetails?: boolean;
  static names(): { [key: string]: string } {
    return {
      DIJobId: 'DIJobId',
      id: 'Id',
      projectId: 'ProjectId',
      withDetails: 'WithDetails',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DIJobId: 'number',
      id: 'number',
      projectId: 'number',
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

