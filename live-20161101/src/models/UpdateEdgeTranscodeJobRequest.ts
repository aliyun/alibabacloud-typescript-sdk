// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateEdgeTranscodeJobRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the data center.
   * 
   * This parameter is required.
   * 
   * @example
   * ******3b-4d18-395c-8106-ff21a6******
   */
  clusterId?: string;
  /**
   * @remarks
   * The ID of the edge transcoding task.
   * 
   * This parameter is required.
   * 
   * @example
   * ****20b48fb04483915d4f2cd8ac****
   */
  jobId?: string;
  /**
   * @remarks
   * The task name.
   * 
   * @example
   * task1
   */
  name?: string;
  ownerId?: number;
  regionId?: string;
  /**
   * @remarks
   * The URL of the input stream.
   * 
   * @example
   * rtmp://mydomain/app/stream1
   */
  streamInput?: string;
  /**
   * @remarks
   * The URL of the output stream.
   * 
   * @example
   * rtmp://testdomain/app/stream2
   */
  streamOutput?: string;
  /**
   * @remarks
   * The template ID.
   * 
   * @example
   * ****96e8864746a0b6f3****
   */
  templateId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      jobId: 'JobId',
      name: 'Name',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      streamInput: 'StreamInput',
      streamOutput: 'StreamOutput',
      templateId: 'TemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      jobId: 'string',
      name: 'string',
      ownerId: 'number',
      regionId: 'string',
      streamInput: 'string',
      streamOutput: 'string',
      templateId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

