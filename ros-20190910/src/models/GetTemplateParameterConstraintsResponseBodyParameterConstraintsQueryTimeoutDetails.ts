// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetTemplateParameterConstraintsResponseBodyParameterConstraintsQueryTimeoutDetails extends $dara.Model {
  /**
   * @remarks
   * Error message.
   * 
   * @example
   * query property SlaveZoneIds.* in resource rds error, error message: query 8 seconds timeout
   */
  errorMessage?: string;
  /**
   * @remarks
   * Resource name.
   * 
   * @example
   * rds
   */
  resourceName?: string;
  /**
   * @remarks
   * Resource type.
   * 
   * @example
   * ALIYUN::RDS::DBInstance
   */
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      errorMessage: 'ErrorMessage',
      resourceName: 'ResourceName',
      resourceType: 'ResourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorMessage: 'string',
      resourceName: 'string',
      resourceType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

