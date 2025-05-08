// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAcrImageRepositoriesRequest extends $dara.Model {
  /**
   * @remarks
   * The type of the artifact. Default value: AcrImage. Valid values:
   * 
   * *   HelmChart: Helm chart image.
   * *   AcrImage: container image.
   * 
   * @example
   * AcrImage
   */
  artifactType?: string;
  /**
   * @remarks
   * The number of entries per page. Valid values: 1 to 100. Default value: 20.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token that is used in the next request to retrieve a new page of results.
   * 
   * @example
   * AAAAAWns8w4MmhzeptXVRG0PUEU=
   */
  nextToken?: string;
  /**
   * @remarks
   * The name of the image repository.
   * 
   * @example
   * wordpress
   */
  repoName?: string;
  static names(): { [key: string]: string } {
    return {
      artifactType: 'ArtifactType',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      repoName: 'RepoName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      artifactType: 'string',
      maxResults: 'number',
      nextToken: 'string',
      repoName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

