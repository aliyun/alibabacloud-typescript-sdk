// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { LabelInfo } from "./LabelInfo";


export class CreateExperimentRequest extends $dara.Model {
  /**
   * @remarks
   * The visibility of the experiment. Valid values: PRIVATE (the experiment is visible only to the creator and the Alibaba Cloud account) and PUBLIC (the experiment is visible to all users). This parameter is optional and the default value is PRIVATE.
   * 
   * @example
   * PRIVATE
   */
  accessibility?: string;
  /**
   * @remarks
   * The default artifact output path of all jobs that are associated with the experiment. Only Object Storage Service (OSS) paths are supported.
   * 
   * @example
   * oss://test-bucket.oss-cn-hangzhou.aliyuncs.com/test
   */
  artifactUri?: string;
  /**
   * @remarks
   * The tags.
   */
  labels?: LabelInfo[];
  /**
   * @remarks
   * The experiment name. The name must meet the following requirements:
   * 
   * *   The name must start with a letter.
   * *   The name can contain letters, digits, underscores (_), and hyphens (-).
   * *   The name must be 1 to 63 characters in length.
   * 
   * This parameter is required.
   * 
   * @example
   * exp-test
   */
  name?: string;
  /**
   * @remarks
   * The workspace ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 478**
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      accessibility: 'Accessibility',
      artifactUri: 'ArtifactUri',
      labels: 'Labels',
      name: 'Name',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessibility: 'string',
      artifactUri: 'string',
      labels: { 'type': 'array', 'itemType': LabelInfo },
      name: 'string',
      workspaceId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.labels)) {
      $dara.Model.validateArray(this.labels);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

