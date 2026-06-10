// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeJobRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * af81a389-91f0-4157-8d82-720edd02b66a
   */
  instanceId?: string;
  /**
   * @remarks
   * The ID of the job.
   * 
   * This parameter is required.
   * 
   * @example
   * c8a2b7f2-ad1a-4865-b872-d0080d9802d9
   */
  jobId?: string;
  /**
   * @remarks
   * Specifies whether to return the script.
   * 
   * @example
   * false
   */
  withScript?: boolean;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      jobId: 'JobId',
      withScript: 'WithScript',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      jobId: 'string',
      withScript: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

