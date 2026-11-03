// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { LabelInfo } from "./LabelInfo";


export class CreateExperimentRequest extends $dara.Model {
  /**
   * @remarks
   * The visibility of the experiment. It can be set to private (visible only to the creator and their Alibaba Cloud account) or public (visible to all users). This parameter is optional. Default value: private.
   * 
   * @example
   * PRIVATE
   */
  accessibility?: string;
  /**
   * @remarks
   * The default artifact output path for all nodes associated with the experiment. Only OSS paths are currently supported.
   * 
   * @example
   * oss://test-bucket.oss-cn-hangzhou.aliyuncs.com/test
   */
  artifactUri?: string;
  /**
   * @remarks
   * The labels.
   */
  labels?: LabelInfo[];
  /**
   * @remarks
   * The name of the experiment. The naming rules are as follows:
   * 
   * - Must start with a lowercase or uppercase letter.
   * - Can contain lowercase and uppercase letters, digits, underscores (_), and hyphens (-).
   * - Must be 1 to 63 characters in length.
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

