// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BatchRequestRequests extends $dara.Model {
  /**
   * @remarks
   * The request parameters of a child request. The parameter value must be a JSON string. For more information, see the topic of the corresponding child request.
   * 
   * Before you specify the request body, you must specify a header by using Content-Type. Content-Type can only be set to application/json.
   */
  body?: { [key: string]: any };
  /**
   * @remarks
   * The header of a child request, which indicates the type of the data specified in the request body.
   */
  headers?: { [key: string]: string };
  /**
   * @remarks
   * The ID of the child request. The ID is used to associate a child request with a response. The ID of a child request must be unique.
   * 
   * This parameter is required.
   * 
   * @example
   * 93433894994ad2e1
   */
  id?: string;
  /**
   * @remarks
   * The method of a child request. Valid values:
   * 
   * *   POST
   * *   GET
   * *   PUT
   * *   DELETE
   * *   HEAD
   * 
   * This parameter is required.
   * 
   * @example
   * POST
   */
  method?: string;
  /**
   * @remarks
   * The API path of a child request. Valid values:
   * 
   * *   /file/get: queries the information about a file.
   * *   /file/update: modifies the information about a file.
   * *   /file/search: searches for a file.
   * *   /file/copy: copies a file or folder.
   * *   /file/move: moves a file or folder.
   * *   /file/delete: deletes a file or folder.
   * *   /file/get_download_url: queries the download URL of a file.
   * *   /file/get_share_link_download_url: queries the download URL of a file in a share.
   * *   /recyclebin/trash: moves a file or folder to the recycle bin.
   * *   /recyclebin/restore: restores a file or folder.
   * *   /file/put_usertags: adds tags to a user.
   * *   /file/delete_usertags: removes tags from a user.
   * *   /drive/get: queries the information about a drive.
   * *   /user/get: queries the information about a user.
   * *   /group/get: queries the information about a group.
   * *   /share_link/create: creates a share.
   * *   /share_link/update: modifies a share.
   * *   /share_link/cancel: cancels a share.
   * *   /share_link/list: queries shares.
   * *   /share_link/get: queries the information about a share.
   * *   /share_link/get_share_token: queries an access token of a share.
   * *   /async_task/get: queries the information about an asynchronous task.
   * 
   * This parameter is required.
   * 
   * @example
   * /file/get
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
      headers: 'headers',
      id: 'id',
      method: 'method',
      url: 'url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      id: 'string',
      method: 'string',
      url: 'string',
    };
  }

  validate() {
    if(this.body) {
      $dara.Model.validateMap(this.body);
    }
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

